import { Icon } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/themeSlice'

export default function Header() {
	const theme = useSelector(selectTheme)

	return (
		<header>
			<Icon className="fa fa-plus-circle" />
		</header>
	)
}
