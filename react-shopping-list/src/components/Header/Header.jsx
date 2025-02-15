import './Header.scss'

export function Header({ children }) {
    return (
      <h1 className='Header'>
        {children}
      </h1>
    )
}