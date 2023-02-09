import React from 'react'

function HospitalCard() {

  const styles = {
    main_container: `w-96 h-96 flex flex-col justify-between items-center`,
    img_container: `w-8/12 h-4/6 drop-shadow-2.5xl`,
    name_container: `border-2 mb-10 h-10 min-w-6/12 bg-white drop-shadow-2xl p-2 contain`
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.img_container}>
        <img src="/images/hospital.png" alt="" className='w-full h-full border-2' />
      </div>
      <div className={styles.name_container}>
        <span>ABC Hospital</span>
      </div>
    </div>
  )
}

export default HospitalCard