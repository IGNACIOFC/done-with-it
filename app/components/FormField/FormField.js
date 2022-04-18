import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import FormErrorMessage from '../FormErrorMessage'

export default function FormField({name, ...inputProps}) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <>
    <AppTextInput 
      // autoCapitalize="none"
      // autoCorrect={false}
      // placeholder='Email'
      // keyboardType='email-address'
      // placeholder='Email'
      // textContentType="emailAddress"
      onBlur={() => setFieldTouched(name)}
      onChangeText={handleChange(name)}
      {...inputProps}
    />
    <FormErrorMessage style={{color:'red'}} error={errors[name]} visible={touched[name]}/>
    </>
  )
}