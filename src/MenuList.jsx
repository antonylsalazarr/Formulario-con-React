function MenuList({ link, name, isActive }) {
    const active = (isActive) ? 'active' : ''
    return (

        <a href={link} className={active}>{name}</a>
    )
}

export default MenuList