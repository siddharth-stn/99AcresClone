import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <>
      <header className="flex items-center my-5 justify-around px-4">
        <button>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>
        <figure className="w-20 ms-8 me-auto">
          <img
            src="https://static.99acres.com/universalapp/img/NNacres_blue_logo.shared.webp"
            alt="site-logo"
          />
        </figure>
        <div>
          <a href="#">
            <span
              className="text-[rgb(0,120,219)] text-[12px] font-bold me-2"
            >Post property</span
            >
            <span
              className="bg-green-600 text-white font-bold bg-badge-gradient rounded-sm p-1 text-[9px]"
            >
              FREE
            </span>
          </a>
        </div>
      </header>
    </>
  )
}

export default Header;
