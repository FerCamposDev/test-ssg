import Image from "next/image"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-5 px-4 md:px-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-between">
          <div className="col-lg-3 col-md-6">
            <a href="/" className="flex items-center">
              <Image src="/img/favicon/android-chrome-192x192.png" alt="logo" height={50} width={50} />
              <h1 className="text-white font-bold text-4xl ml-2">To<span className="text-secondary">Grow</span></h1>
            </a>
            <p className="text-gray-300">You grow, We grow.</p>
            <div className="flex mt-4">
              <a
                href="https://www.linkedin.com/company/togrow-argentina"
                target="_blank"
                className="rounded-full bg-white text-primary hover:bg-primary hover:text-white  w-8 h-8 p-1 text-center"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="text-secondary text-2xl font-semibold">Short Link</span>
            <div className="mt-4">
              <a href="/#" className="mb-2 text-gray-300 flex items-center"><i className="fas fa-angle-right text-secondary me-2"></i>Home</a>
              <a href="/#about" className="mb-2 text-gray-300 flex items-center"><i className="fas fa-angle-right text-secondary me-2"></i>About us</a>
              <a href="/#team" className="mb-2 text-gray-300 flex items-center"><i className="fas fa-angle-right text-secondary me-2"></i>Our Team</a>
              <a href="/#services" className="mb-2 text-gray-300 flex items-center"><i className="fas fa-angle-right text-secondary me-2"></i>Our Services</a>
              <a href="/#contact" className="mb-2 text-gray-300 flex items-center"><i className="fas fa-angle-right text-secondary me-2"></i>Contact us</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="text-secondary text-2xl font-semibold">Help Link</span>
            <div className="mt-4">
              <a href="/terms" target="_blank" className="mb-2 text-gray-300 flex items-center"><i className="fas fa-angle-right text-secondary me-2"></i>Terms of use</a>
              <a href="/policies" target="_blank" className="mb-2 text-gray-300 flex items-center"><i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="#contact" className="text-secondary text-2xl font-semibold">Contact Us</a>
            <div className="mt-4">
              <a href="https://maps.app.goo.gl/9HLdX3aV1kiakx3i6" target="_blank" className="py-2 flex items-center border-b border-gray-700 text-gray-300"><i className="fas fa-map-marker-alt text-secondary me-2"></i> RP2 KM 70, Buenos Aires</a>
              <a href="tel:+5411 5059 5098" className="py-2 flex items-center border-b border-gray-700 text-gray-300"><i className="fas fa-phone-alt text-secondary me-2"></i> +5411 5059 5098</a>
              <a href="mailto:info@togrow.com.ar" className="py-2 flex items-center text-gray-300"><i className="fas fa-envelope text-secondary me-2"></i> info@togrow.com.ar</a>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center md:text-left">
            <i className="fas fa-copyright text-gray-300 mr-2"></i>
            <span className="text-gray-200">
              <a href="/" className="text-white font-semibold">To<span className="text-secondary">Grow</span></a>
              , All right reserved.
            </span>
          </div>
          <div className="text-center md:text-right">
            <span className="text-gray-300">Designed By
              <a href="/" className="text-white font-semibold ml-1">To<span className="text-secondary">Grow</span></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer