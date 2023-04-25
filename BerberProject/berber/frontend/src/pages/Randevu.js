import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Randevu = () => {

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            date: ""
        },
        onSubmit: (values, {resetForm}) => {
            axios.post("http://localhost:5000/randevu/randevu-al", values)
            resetForm();
            toast.success(`${values.fullName}, randevun basariyla alindi!`)
        }
    });

  return (
    <div className='randevu-wrapper'>
        <Link to="/">
            <button className='back-btn'><span>←</span> Anasayfaya dön</button>
        </Link>
        <div className="container">
            <h2>Randevu Oluştur</h2>

            <form onSubmit={formik.handleSubmit}>
                <input type="text" name='fullName' value={formik.values.fullName} placeholder='Ad-Soyad' onChange={formik.handleChange} />
                <input type="email" name='email' value={formik.values.email} placeholder='E-mail' onChange={formik.handleChange} />
                <label>
                    <span>Randevu tarihi seçiniz</span>
                    <input type="date" name='date' value={formik.values.date} onChange={formik.handleChange} />
                </label>
                <button type='submit'>Randevu Al</button>
            </form>
        </div>
        <ToastContainer />

    </div>
  )
}

export default Randevu