import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full dark:bg-slate-800 bg-slate-300 rounded-lg">
      <div>
          <Link
            href="/movieHome"
            className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
          >
            Movie Page
          </Link>
        </div>
        <div>
          <Link
            href="/magic"
            className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
          >
            magic 8 Ball
          </Link>
        </div>
        <div>
          <Link
            href="/about"
            className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
          >
            About
          </Link>
        </div>
      </div>
    </main>
  )
}
