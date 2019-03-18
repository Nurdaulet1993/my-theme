let sidebar =  document.querySelector('.sidebar');
let sidebarToogle = document.querySelector('.sidebar-toggle');

sidebarToogle.addEventListener('click', () =>{
    sidebar.classList.toggle('show');
});

// Sidebar Collapse
document.addEventListener('click', (event) => {
    if (!event.target.hasAttribute('data-toggle','collapse')) return;

    if(event.target.nextElementSibling.style.maxHeight){
        event.target.nextElementSibling.style.maxHeight = null;
        if(event.target.hasAttribute('aria-expanded')){
            event.target.setAttribute('aria-expanded',false)
        }
    }else{
        event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + "px";
        if(event.target.hasAttribute('aria-expanded')){
            event.target.setAttribute('aria-expanded',true)
        }
        
    }
});
// For change active sidebar-link in collapse blocks
document.querySelectorAll('.collapse .sidebar-link').forEach(function(item){
    item.addEventListener('click', function(){
        document.querySelector('.collapse .sidebar-link.active').classList.remove('active');
        this.classList.add('active');

    })
});