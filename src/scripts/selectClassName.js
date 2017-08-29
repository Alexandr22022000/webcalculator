const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    .test(navigator.userAgent);

const selectClassName = (className) => (isMobile ? `${className}-mobile` : className);

export default selectClassName;