import { Form, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string()
    .required("Please enter your name")
    .min(3, "Your name must exceed 3 characters"),

  age: yup.number()
    // .transform((value) => {
    //   if (isNaN(value)) {
    //     return undefined
    //   } else {
    //     return value
    //   }
    // })
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .nullable()
    .required("Please enter your age")
    .positive("Must be a positive value")
    .integer("Please insert number")
    .min(10, 'Min value 10.')
    .max(20, 'Max value 20.'),

  website: yup.string()
    .required("Please enter your website (url)")
    .url(),
})

export function ValForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    const successMsg = document.querySelector(".form-success");
    successMsg.innerHTML = `The form is submitted`;
    console.log(data)
  }

  console.log(errors)

  return ( 
  <div className="form-wrapper">
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Age (min 10, max 20)</Form.Label>
        <Form.Control type="text" placeholder="Your age" {...register("age")} />
        {errors.age && <span>{errors.age.message}</span>}
      </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Website (url)</Form.Label>
          <Form.Control type="text" placeholder="Your website" {...register("website")} />
          {errors.website && <span>{errors.website.message}</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="form-success"></div>
    </Form>
  </div>
  )
}

export default ValForm;

