import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

const createEl = (id) => {
	const el = document.createElement("div");
	el.setAttribute("id", id);
	document.body.appendChild(el);

	return el;
};

const portal = (id, isShow) => ({ children }) => {
	const [container, setContainer] = useState(null);
	useEffect(() => {
		setContainer(document.getElementById(id) || createEl(id));

		return () => {
			if (!container) return;

			const timer = setTimeout(() => {
				clearTimeout(timer);
				if (container.innerHTML === "") container.remove();
			}, 100);
		};
	}, [container]);

	return isShow && container && createPortal(children, container);
};
const usePortal = ({
	containerId = "use-portal-react",
	defaultShow = true,
	onShow,
	onHide,
}) => {
	const [isShow, setIsShow] = useState(defaultShow);

	const show = (e) => {
		setIsShow(true);
		if (onShow instanceof Function) onShow(e);
	};

	const hide = (e) => {
		setIsShow(false);
		if (onHide instanceof Function) onHide(e);
	};

	const toggle = (e) => {
		isShow ? hide(e) : show(e);
	};

	const Portal = useCallback(portal(containerId, isShow), [isShow]);

	return { Portal, isShow, show, hide, toggle };
};

export default usePortal;
