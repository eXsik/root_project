import React, { useState } from 'react'
import { house, phone, envelope } from '../assets';
import { styles, layout } from '../style';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('test')
    // setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <section id="contact" className={`${layout.section2} bg-white xl:px-0 sm:px-16 px-3`}>
      <div className="flex justify-center">
        <h2 className={`${styles.heading2} text-primary text-center md:mb-6`}>
          <span className="relative inline-block">
            <span className="z-[1] inline-block relative text-primary">Skontaktuj się z nami</span>
            <span className="w-[100px] h-2 bg-secondary inline-block absolute -right-2 bottom-4 z-[0]"></span>
          </span>
        </h2>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <p className={`${styles.paragraph} max-w-[600px] mt-5 text-primary`}>
            Skontaktuj się z nami a razem wybierzemy dla Ciebie najlepsze rozwiązanie.
          </p>
          <div className='flex flex-col md:mt-8'>
            <div className='flex'>
              <div className='bg-primary p-6 rounded mr-8 flex items-center justify-center h-[72px] w-[72px]'>
                <img className="w-6 h-6" src={house} alt="ikonka domku" />
              </div>
              <div>
                <h4 className='text-primary text-[18px] font-medium mb-1'>Nasza lokalizajca</h4>
                <p className={`${styles.paragraph} text-gray-500 !text-[16px] leading-[16px]`}>
                  ul. Testowa 16 <br/>
                  63-400 Kalisz
                </p>
              </div>
            </div>
            <div className="flex my-8">
              <div className='bg-primary p-6 rounded mr-8 flex items-center justify-center h-[72px] w-[72px]'>
                <img className="w-6 h-6" src={phone} alt="ikonka telefonu" />
              </div>
              <div>
                <h4 className='text-primary text-[18px] font-medium mb-1'>Nasz numer telefonu</h4>
                <p className={`${styles.paragraph} text-gray-500 !text-[16px] leading-[16px]`}>
                  <a href="tel:123 123 123">123 123 123</a>
                </p>
              </div>
            </div>
            <div className="flex">
              <div className='bg-primary p-6 rounded mr-8 flex items-center justify-center h-[72px] w-[72px]'>
                <img className="w-6 h-6 " src={envelope} alt="ikonka email" />
              </div>
              <div>
                <h4 className='text-primary text-[18px] font-medium mb-1'>Nasz Email</h4>
                <p className={`${styles.paragraph} text-gray-500 !text-[16px] leading-[16px]`}>
                  <a href="mailto:email.testowy@test.pl"> email.testowy@test.pl</a>
                
                  </p>
              </div>
            </div>

          </div>
        </div>
        <div>
          {!isFormSubmitted ? (
            <div className="px-10 py-16 bg-secondary rounded-lg shadow-lg max-w-[650px]">
              <div className="flex">
                <input className="p-4 w-full rounded-sm focus:outline-none" type="text" required placeholder="Twoje imię" name="username" value={username} onChange={handleChangeInput} />
              </div>
              <div className="flex my-4">
                <input className="p-4 w-full rounded-sm focus:outline-none" type="email" required placeholder="Twój email" name="email" value={email} onChange={handleChangeInput} />
              </div>
              <div className="flex">
                <input className="p-4 w-full rounded-sm focus:outline-none" type="text" required placeholder="Twój telefon" name="phone" value={email} onChange={handleChangeInput} />
              </div>
              <div className='mt-4'>
                <textarea
                  className="p-4 w-full rounded-sm focus:outline-none"
                  placeholder="Wiadomość..."
                  rows={6}
                  value={message}
                  required
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="submit" className="mt-4 bg-primary text-white py-4 px-6 font-poppins font-medium text-[18px] uppercase transition duration-400 ease-out  hover:scale-105 shadow outline-none flex items-center w-full justify-center" onClick={handleSubmit}> {!loading ? 'Wyślij' : 'Wysyłanie...'}</button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">
                Dziękujemy, już wkrótce ktoś się z Tobą skontaktuje.
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact