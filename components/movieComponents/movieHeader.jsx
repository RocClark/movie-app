import Link from 'next/link'

export default function Header() {
    return (
        <div className="navbar">
            <header className="flex bg-white shadow ">
                <div className="absolute left-0 mx-auto max-w-9xl  py-4 ">
                <h1 className=" text-3xl font-bold tracking-tight text-gray-900">MovieTitle</h1>
                </div>
                <div className="flex right-0 mx-auto max-w-9xl px-2 py-4 sm:px-4 lg:px-1">
                <Link
                  href="/movieHome"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">
                        Home
                </Link>
                <Link
                  href="/movieHome/seatSelect"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">
                        seat
                </Link>
                <Link
                  href="/movieHome/ticketReview"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">
                        ticket review
                </Link>
                <Link
                  href="/movieHome/endPage"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">
                        end page
                </Link>
                <Link
                  href="/movieHome/signupPage"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">
                        signup page
                </Link>
                </div>
            </header>
        </div>
    );
}

// export default Header;
// <Link
//   href="/"
//   className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900"
// >
// Home
// </Link>