import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import './SignUp.scss'
import Modal from '../../components/Modal/Modal'
import { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [checked, setChecked] = useState(false)
  const [typePass, setTypePass] = useState(false)
  const [error, setError] = useState('')
  const [error, setError] = useState('')
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.currentUser) {
      navigate('/user')
    }
  }, [])

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      checkbox: false,
    },
  })

  const seePass = () => setTypePass((prev) => !prev)

  const createAccount = () => {
    if (password1 === password2) {
      createUserWithEmailAndPassword(auth, email, password1)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setError(errorMessage)
        })
      reset()
      navigate('/user')
    } else {
      setError('Uncorrect password')
    }
  }

  return (
    <Modal>
      <div className='sign-up_container'>
        <form onSubmit={handleSubmit(createAccount)}>
          <div className='sign-up_content'>
            <h1>Sign Up</h1>

            <label className='name'>
              <input
                type='text'
                {...register('name', {
                  required: 'You need to fill in a name',
                  minLength: {
                    value: 3,
                    message: 'You entered too short a name',
                  },
                })}
                value={name}
                onChange={(e) => setName((prev) => (prev = e.target.value))}
                placeholder='Name'
              />
            </label>
            <div className='error'>
              {errors?.name && (
                <p style={{ color: 'tomato' }}>{errors?.name?.message || 'Error!'}</p>
              )}
            </div>

            <label className='email'>
              <input
                type='email'
                {...register('email', {
                  required: 'You need to fill in a Email',
                  minLength: {
                    value: 5,
                    message: 'This is not a valid email',
                  },
                  pattern: {
                    value: /[@]/,
                    message: 'This is not a valid email',
                  },
                  pattern: {
                    value: /[.]/,
                    message: 'This is not a valid email',
                  },
                })}
                value={email}
                onChange={(e) => setEmail((prev) => (prev = e.target.value))}
                placeholder='Email'
              />
            </label>
            <div className='error'>
              {errors?.email && (
                <p style={{ color: 'tomato' }}>{errors?.email?.message || 'Error!'}</p>
              )}
            </div>

            <label className='pass'>
              <input
                {...register('pass', {
                  required: 'You need to fill in a password',
                  minLength: {
                    value: 6,
                    message: 'Your password must be at least 6 characters',
                  },
                })}
                type={typePass ? 'text' : 'password'}
                value={password1}
                onChange={(e) => setPassword1((prev) => (prev = e.target.value))}
                placeholder='Password'
              />
            </label>
            <div className='error'>
              {errors?.pass && (
                <p style={{ color: 'tomato' }}>{errors?.pass?.message || 'Error!'}</p>
              )}
            </div>

            <div className='pass2'>
              <input
                type={typePass ? 'text' : 'password'}
                value={password2}
                onChange={(e) => setPassword2((prev) => (prev = e.target.value))}
                placeholder='Repeat password'
              />

              <div className='see_pass' onClick={seePass}>
                {typePass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </div>
            </div>

            <div className='agree'>
              <Controller
                name='checkbox'
                className='checkbox'
                control={control}
                rules={{ required: 'Please, read and agree to our rules' }}
                render={({ field }) => (
                  <input
                    checked={checked}
                    onClick={(e) => setChecked(e.target.checked)}
                    type='checkbox'
                    {...field}
                  />
                )}
              />
              <span>I agree to the processing of my information</span>
            </div>
            <div className='error'>
              {errors?.checkbox && (
                <p style={{ color: 'tomato', margin: '0px 0px 20px 0px' }}>
                  {errors?.checkbox?.message || 'Error!'}
                </p>
              )}
            </div>

            <div className='error'>
              {error && (
                <p style={{ color: 'tomato', margin: '0px 0px 20px 0px' }}>
                  {error || 'Something went wrong!'}
                </p>
              )}
            </div>

            <div className='btn-create'>
              <button type='submit'>Create an account</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}
export default SignUp
