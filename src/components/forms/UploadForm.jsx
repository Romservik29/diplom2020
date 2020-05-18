import React from 'react'
import {Formik} from "formik";
import Input from './FormInput'

export default function UploadForm() {

     return <Formik 
     initialValues={{file: undefined, name: ''}}
     onSubmit={(values) => {
        alert(
          JSON.stringify(
            { 
              fileName: values.file.name, 
              type: values.file.type,
              size: `${values.file.size} bytes`
            },
            null,
            2
          )
        );
      }} 
      render={({
          values,
          handleSubmit,
          handleChange,
          setFieldValue
      }) => {
          return (
                <form onSubmit={handleSubmit}>
                        <label htmlFor="file">Название</label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        <Input
                            id="file"
                            name="file"
                            type="file"
                            onChange={event=>{setFieldValue("file", event.currentTarget.files[0], false)}}
                        />

                        <button type="submit">Submit</button>
                    </form>
          )
      }}
  />
}
