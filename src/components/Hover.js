const HOVER = {};

HOVER.outer = {
    cursor: 'pointer',
    position: 'relative',
    margin: 0,
    padding: 0
}

HOVER.normal = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    zIndex: 1,
}

HOVER.inner = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
}

HOVER.messageInputClick = {
    position: 'fixed',
    top: 500,
    left: 600,
    display: 'block',
    zIndex: 3,
    backgroundColor: '#fafdf8',
}

HOVER.userInfoNormal = {
   display:'none'
    
}

HOVER.userInfoBox = {
    position:'absolute',
    right:'100px',
    opacity:1,
}

export default HOVER;