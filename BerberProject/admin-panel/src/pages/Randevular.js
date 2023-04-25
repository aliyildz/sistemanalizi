import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Randevular = () => {

    const [randevular, setRandevular] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/randevu")
        .then(res => setRandevular(res.data))
    }, [])

    const deleteRandevu = async (randevu) => {
      await axios.delete(`http://localhost:5000/randevu/${randevu._id}`)
      await axios.get("http://localhost:5000/randevu")
      .then(res => setRandevular(res.data))
    }

  return (
    <div className='randevular'>
        <table>
            <thead>
                <tr>
                    <th>Ad-Soyad</th>
                    <th>E-posta</th>
                    <th>Randevu Tarihi</th>
                    <th>İşlemler</th>
                </tr>
            </thead>
            <tbody>
                    {randevular.length !== 0 && randevular.map(randevu => (
                      <tr>
                        <td>{randevu.fullName}</td>
                        <td>{randevu.email}</td>
                        <td>{randevu.date}</td>
                        <td>
                            <button onClick={() => deleteRandevu(randevu)}>Sil</button>
                        </td>
                      </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default Randevular