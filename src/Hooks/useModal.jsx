import React, { useRef, useCallback, useEffect } from "react";
import usePortal from "./usePortal";
import styled from "./useModal.module.css";

const modal = (Portal, isShow, hide, showClose, clickOutsideToHide) => ({
	children,
}) => {
	const wrapperRef = useRef();
	const handleClick = useCallback((e) => {
		e.preventDefault();
		if (e.target === wrapperRef.current) {
			hide();
		}
	}, []);

	if (!isShow) return null;
	return (
		<Portal>
			<div
				onClick={(clickOutsideToHide && handleClick) || null}
				ref={wrapperRef}
				className={styled.wrapper}
			>
				<div className={`${styled.container} ${styled.slideIn}`}>
					{showClose ? (
						<div className={styled.close}>
							<span onClick={hide}>&times;</span>
						</div>
					) : null}
					{children}
				</div>
			</div>
		</Portal>
	);
};

const useModal = ({
	containerId = "use-modal-react-portal",
	clickOutsideToHide = false,
	defaultShow = false,
	escToHide = false,
	showClose = true,
	onShow,
	onHide,
}) => {
	const { Portal, isShow, show, hide, toggle } = usePortal({
		containerId,
		defaultShow,
		onShow,
		onHide,
	});

	const Modal = useCallback(
		modal(Portal, isShow, hide, showClose, clickOutsideToHide),
		[isShow]
	);

	useEffect(() => {
		if (!escToHide || !isShow) return;

		const handleKeyDown = (e) => {
			if (e.keyCode === 27) hide();
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [hide, isShow, escToHide]);

	return { Modal, isShow, show, hide, toggle };
};

export default useModal;
