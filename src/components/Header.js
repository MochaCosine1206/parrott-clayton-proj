const Header = () => {
    return (
        <div className="p-10 h-24 bg-white w-screen shadow-lg flex justify-center md:justify-start items-center fixed">
        <div
          className="w-24 h-9 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `URL(https://s3.amazonaws.com/media.widencdn.net/logos/claytonhomes/2daceb96-4bcb-4652-9e6c-7d527566cfa2/client-logo/Clayton_Corporate_Logo%401x.png)`,
          }}
        ></div>
      </div>
    )
}

export default Header