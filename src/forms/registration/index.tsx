import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { StyleRules, withStyles } from '@material-ui/core/styles'
import { Theme, WithStyles } from '@material-ui/core'
import { FormErrors, reduxForm, Field, InjectedFormProps } from 'redux-form'

const styles = {
  root: {
    marginTop: '2em'
  }
}

interface IProps extends WithStyles<keyof typeof styles> {
  handleSubmit: (event: React.FormEvent) => void
}

interface FormData {
  email: string,
  password: string,
  passwordConfirm: string,
}

const validate = (values: FormData, props: IProps): FormErrors<FormData> => {
  return {}
}

class Registration extends React.Component<IProps & InjectedFormProps<FormData, IProps>> {
  render () {
    const { classes, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name='email'>
          <TextField
            label={'Email'}
            placeholder='Email'
            type='email'
            margin='normal'
            fullWidth
          />
        </Field>
        <Field name='password'>
          <TextField
            label={'Password'}
            type='password'
            margin='normal'
            fullWidth
          />
        </Field>
        <Field name='passwordConfirm'>
          <TextField
            label={'Password Confirm'}
            type='password'
            margin='normal'
            fullWidth
          />
        </Field>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className={classes.root}
          children={'Register'}
        />
      </form>
    )
  }
}

const form = reduxForm({
  form: 'registration',
  validate
})(Registration)

export default withStyles((theme: Theme): StyleRules => styles)<IProps>(form)
