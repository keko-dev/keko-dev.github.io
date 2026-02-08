// 猫抓特效
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    let scratch = document.createElement('span');
    scratch.style.position = 'fixed';
    scratch.style.fontSize = '30px';
    scratch.style.color = '#ff6699';
    scratch.style.left = e.clientX + 'px';
    scratch.style.top = e.clientY + 'px';
    scratch.style.zIndex = '999999';
    scratch.style.pointerEvents = 'none';
    scratch.style.transform = 'scale(0)';
    scratch.style.animation = 'scratch-animation 0.8s ease-out';
    scratch.innerText = '*'; // 用星号代替 emoji，避免编码问题
    document.body.appendChild(scratch);

    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scratch-animation {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        50% { transform: scale(1.5) rotate(15deg); opacity: 0.8; }
        100% { transform: scale(2) rotate(0deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
      scratch.remove();
    }, 1000);
  });
});
