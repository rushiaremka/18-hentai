const sidebar = document.querySelector('.sidebar')
const sidebarBtn = document.querySelector('.sidebarbtn')
let open = false

sidebarBtn.addEventListener('click', () => {
  const translateX = open ? '0px' : '-200px';

  sidebar.style.transform = `translateX(${translateX})`;
  sidebar.style.transition = 'transform 0.3s ease-in-out';

  open = !open;

  if (open) {
    sidebar.style.position = 'sticky';
    sidebar.style.top = '0';
    sidebar.style.left = '0';
  }
  else{
    sidebar.style.position = 'static';
    sidebar.style.transform = 'translateX(0)';
    sidebar.style.transition = '';
  }
});


