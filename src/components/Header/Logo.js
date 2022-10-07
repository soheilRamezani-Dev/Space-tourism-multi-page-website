const Logo = () => {
  return (
    <div className="logo col-2 d-flex justify-content-center mt-2">
      <a class="navbar-brand" href="#">
        <img src={process.env.PUBLIC_URL + "/images/shared/logo.svg"} />
      </a>
    </div>
  );
};

export default Logo;
