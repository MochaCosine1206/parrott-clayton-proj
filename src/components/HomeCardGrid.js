const HomeCardGrid = ({ children }) => {
    return (
        <div className="mt-24 md:mt-0 p-10 md:px-10 md:py-5 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl justify-self-center">
            {children}
        </div>
    )
}

export default HomeCardGrid