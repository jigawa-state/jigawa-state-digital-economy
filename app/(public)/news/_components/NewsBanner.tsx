
export const NewsBanner = ( {message, imageUrl, author, title}: {message: string, title: string, imageUrl: string, author: string}) => {
  return (
    <section style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }} className=" pt-20 md:h-[90vh] bg-cover bg-center items-end justify-end flex w-full md:items-start pb-6 px-4 sm:px-6 lg:px-8">
    <div className=" bg-white/60 flex flex-col text-center items-center self-end px-10 justify-center mx-auto">
        <p className="mt-6 max-w-3xl md:text-5xl text-center text-green-600 py-4 px-8 text-2xl font-semibold font-poppins">
            {message}
        </p>
        <p className="mb-4 text-gray-600">
          By {author}
        </p>
    </div>
  </section>
  )
}
