let bsp_rgb_speed = 50;
const bsp_rgb_speedup = (many = 1) => {bsp_rgb_speed -= many};
const bsp_rgb_speeddown = (many = 1) => {bsp_rgb_speed += many};
const bsp_rgb_setspeed = (value) => {bsp_rgb_speed = value};
function bsp_add_full_kit(){
    /* Comprueba si el script contiene la clase all-full-kit, si lo tiene, añade bootstrap y bootstrap-plus */
    if(document.querySelector('script.add-full-kit')){
        /* En esta variable se guarda el comentario que irá en los divs */
        let com = `<!-- Code inscrusted by bootstrap-plus (bootstrap 5.0.0-beta1 and bootstrap-plus v1.0.0) -->`;

        /* Se crea el <div> para los links */
        let _div_links_ = document.createElement('div');
        _div_links_.innerHTML = com;

        /* Se crea el <div> para los scripts */
        let _div_scripts_ = document.createElement('div');
        _div_scripts_.innerHTML = com;

        /* Se crea el <link> de bootstrap */
        let _link_bs_ = document.createElement('link');
        _link_bs_.setAttribute('href','https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
        _link_bs_.setAttribute('rel','stylesheet');
        _link_bs_.setAttribute('integrity','sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1');
        _link_bs_.setAttribute('crossorigin','annonymus');

        /* Se crea el <link> de bootstrap-plus */
        let _link_bsp_ = document.createElement('link');
        _link_bsp_.setAttribute('href','https://cdn.jsdelivr.net/gh/jebbarbas/bootstrap-plus@v1.0.0/bsp.min.css');
        _link_bsp_.setAttribute('rel','stylesheet');
        _link_bsp_.setAttribute('crossorigin','annonymus');

        /* Se crea el <script> de bootstrap_bundle */
        let _script_bs_ = document.createElement('script');
        _script_bs_.setAttribute('src','https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js');
        _script_bs_.setAttribute('integrity','sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW');
        _script_bs_.setAttribute('crossorigin','annonymus');

        /* Se meten los <link> en el <div> */
        _div_links_.append(_link_bs_);
        _div_links_.append(_link_bsp_);

        /* Se mete el <script> en el <div> */
        _div_scripts_.append(_script_bs_);

        /* Se mete el <div>:links en el <head> */
        document.head.append(_div_links_);

        /* Se mete el <div>:scripts en el <body> */
        document.body.append(_div_scripts_);
    }
}
/* Esta funcion se encarga de mostrar y ocultar el sidebar */
function bsp_toggle_sidebar(){
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let sidebar_toggler = document.getElementsByClassName("sidebar-toggler")[0];
    let sidebar_toggler_toggled = document.getElementsByClassName("sidebar-toggler-toggled")[0];

    /* Comprueba si existen los elementos para que no marque ningun error */
    if(sidebar && sidebar_toggler && sidebar_toggler_toggled){
        sidebar.classList.toggle("toggled");
        sidebar_toggler.classList.toggle("d-none");
        sidebar_toggler_toggled.classList.toggle("d-none");
    }
    else{
        console.log('The sidebar will not work because you need to add the 3 components: sidebar sidebar-toggler sidebar-toggler-toggled');
    }
}
function bsp_rgb_move(red, green, blue, step){
    if(document.querySelector('[class*="-rgb"]')){
        increase = 5
        local_red = red;
        local_green = green;
        local_blue = blue;
        local_step = step;

        document.documentElement.style.setProperty('--bsp-rgb', `rgb(${local_red},${local_green},${local_blue})`);

        switch(local_step){
            case 1:
                local_green += increase;
                if(local_green == 255){
                    local_step = 2;
                }
                break;
            case 2:
                local_red -= increase;
                if(local_red == 0){
                    local_step = 3;
                }
                break;
            case 3:
                local_blue += increase;
                if(local_blue == 255){
                    local_step = 4
                }
                break;
            case 4:
                local_green -= increase;
                if(local_green == 0){
                    local_step = 5;
                }
                break;
            case 5:
                local_red += increase;
                if(local_red == 255){
                    local_step = 6
                }
                break;
            case 6:
                local_blue -= increase;
                if(local_blue == 0){
                    local_step = 1;
                }
                break;
        }
        /*
        Switch cases:
        0. red empieza en 255, green en 0 y blue en 0
        1. green sube hasta 255
        2. red baja hasta 0
        3. blue sube hasta 255
        4. green baja hasta 0
        5. red sube hasta 255
        6. blue baja hasta 0
        */
        setTimeout(bsp_rgb_move.bind(null, local_red, local_green, local_blue, local_step), bsp_rgb_speed)
    }
    
}
/* Esta funcion es para cargar el JS una vez cargado el DOM */
function bsp_charge_js(){
    bsp_add_full_kit();

    let sidebar = document.getElementsByClassName("sidebar")[0];
    let sidebar_toggler = document.getElementsByClassName("sidebar-toggler")[0];
    let sidebar_toggler_toggled = document.getElementsByClassName("sidebar-toggler-toggled")[0];

    /* Igualmente comprueba si existen los 3 elementos */
    if(sidebar && sidebar_toggler && sidebar_toggler_toggled){
        sidebar_toggler_toggled.classList.add('d-none');
        
        sidebar_toggler.addEventListener("click", () => {
            bsp_toggle_sidebar();
        });

        sidebar_toggler_toggled.addEventListener("click", () => {
            bsp_toggle_sidebar();
        });
    }

    /* Funcion para ponerle los <span class="btn-neon-border"></span> a todos los btn-neon-snake */
    let all_snake_buttons = document.querySelectorAll('.btn-neon-snake');
    all_snake_buttons.forEach(element => {
        let _span_border_1_ = document.createElement('span');
        let _span_border_2_ = document.createElement('span');
        let _span_border_3_ = document.createElement('span');
        let _span_border_4_ = document.createElement('span');

        _span_border_1_.classList.add('btn-neon-border');
        _span_border_2_.classList.add('btn-neon-border');
        _span_border_3_.classList.add('btn-neon-border');
        _span_border_4_.classList.add('btn-neon-border');

        element.append(_span_border_1_);
        element.append(_span_border_2_);
        element.append(_span_border_3_);
        element.append(_span_border_4_);
    });

    /* Funcion para checar si hay elementos rgb */
    if(document.querySelector('[class*="-rgb"]')){
        bsp_rgb_move(255,0,0,1);
    }
    
};
document.addEventListener("DOMContentLoaded", bsp_charge_js);
