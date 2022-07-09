import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import { light, dark, primary, secondary } from '../../data/GlobalData'


export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`

export const ModalWrapper = styled(motion.div)`
	padding: 0;
	background: ${light};
	color: ${primary};
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	text-align: center;
	border-radius: 6px;
	
`

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 8px;
	right: 8px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
	@media screen and (max-width: 768px) {
		top: 5px;
		right: 5px;
	}
`