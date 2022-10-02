import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import validationSchema from './validations'

function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async(values) => {
      try {
        console.log(values);
      } catch (error) {
        
      }
    }

  })

  return (
    <div>
      <Flex align='center' width='full' justifyContent='center'>
        <Box p={10}>
          <Box textAlign='center'>
            <Heading>Login</Heading>
          </Box>

          <Box my={5} textAlign='left'>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input type='email' 
                  name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email} />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' 
                  name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password} />
              </FormControl>

              <Box display='flex' justifyContent='space-between'>
                <Button mt={4} width='full' bg='transparent' border='1px solid' borderRadius='10%' 
                  cursor='pointer' p={5} type='submit' >
                  Login
                </Button>
                
                <Button mt={4} as={Link} to='/register' textDecoration='none' 
                  width='full' bg='transparent' border='1px solid' borderRadius='10%' 
                  cursor='pointer' p={5} type='submit' >
                  Register
                </Button>
              </Box>

            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Login