import { Container, Modal as ModalMUI } from '@mui/material'
import { ReactElement } from 'react'

interface Props {
	active: boolean
	setActive: (active: boolean) => void
	children: ReactElement
}

export default function Modal({ active, setActive, children }: Props) {
	return (
		<Container>
			<ModalMUI open={active} onClose={() => setActive(false)}>
				{children}
			</ModalMUI>
		</Container>
	)
}
