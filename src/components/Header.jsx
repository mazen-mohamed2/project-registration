
const Header = () => {
  return (
    <header className="rounded-br-[5rem] bg-secondary grid place-items-center py-20 px-10 ">
    <div className="flex flex-col justify-start space-y-3">
    <h2 className="uppercase text-4xl font-semibold">Action registration form</h2>
    <p className="font-normal text-xl capitalize ">this form is used to register for an auction.</p>
    <p className="font-normal text-xl capitalize ">this form asks for basic information such as name,
    </p>
    <p className="font-normal text-xl capitalize ">address and contact information</p>
    </div>
    </header>
  )
}

export default Header