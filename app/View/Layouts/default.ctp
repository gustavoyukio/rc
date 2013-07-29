<!DOCTYPE html>
<html class="no-js" lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo $title_for_layout; ?></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <?php echo $this->Html->css( array('style.css')); ?>

    <!--[if lt IE 10]>
        <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script>window.html5 || document.write('<script src="/js/libs/html5shiv.js"><\/script>')</script>
    <![endif]-->
    <script src="/js/libs/modernizr-2.6.2.min.js"></script>
</head>

<body>

<div class="wrapper">
    <!--Header-->
    <header id="top">
        <nav role="navigation" class="grid wfull row">
            <!-- IF is HOME -->
            <h1 id="logo" class="c1">
                <a href="index.html" title="Red Class: Acompanhantes e Scorts de Luxo" class="">Red Class: Acompanhantes e Scorts de Luxo<img src="/js/logo-red-class.png" alt="Red Class"></a>
            </h1>
            <!-- Else -->
            <!-- <h6 id="logo">
                <a href="index.html" title="Red Class: Acompanhantes e Scorts de Luxo" class="">Red Class: Acompanhantes de Luxo e Scorts <img src="/js/logo-red-class.png" alt="Red Class"></a>
            </h6> -->
            
            <!-- Menu -->
            <ol id="principal" class="menu c5">
                <li><a href="assine.html" title="Assine">Assine</a></li>
                <li class="on">
                    <a href="modelos.html" title="Modelos" class="">Modelos</a>

                    <div class="sub">
                        <ol>
                            <li><a href="modelo-categoria.html" title="Loiras">Loiras</a></li>
                            <li><a href="modelo-categoria.html" title="Morenas">Morenas</a></li>
                            <li><a href="modelo-categoria.html" title="Ruivas">Ruivas</a></li>
                            <li><a href="modelo-categoria.html" title="Mulatas">Mulatas</a></li>
                            <li><a href="modelo-categoria.html" title="Orientais">Orientais</a></li>
                        </ol>

                        <div class="destaques clearfix">
                            <h3>
                                <a href="single-modelo.html" title="Acompanhante: Nome">
                                    <b>Babi Bombshell</b>
                                    <img src="/js/destaque-menu.jpg" alt="Nome">
                                </a>
                            </h3>

                            <h3>
                                <a href="single-modelo.html" title="Acompanhante: Nome">
                                    <b>Babi Bombshell</b>
                                    <img src="/js/destaque-menu.jpg" alt="Nome">
                                </a>
                            </h3>
                        </div>
                    </div>
                </li>
                <li><a href="blog.html" title="Blog">Blog</a></li>
                <li><a href="contato.html" title="Contato">Contato</a></li>
            </ol>
            
            <!-- Busca -->
            <form action="" id="search" class="c3">
                <fieldset>
                    <legend class="">Busca de acompanhantes</legend>
                    <p><input type="text" placeholder="Buscar"><input type="submit" class="ir"></p>
                </fieldset>
            </form>

            <a href="#login" id="go-login" class="c1"><b>Login</b> <i></i></a>
        </nav>
    </header>
		
    <!--home-->
    <div role="main" class="bg-darkgray">

		<?php echo $this->Session->flash(); ?>

		<?php echo $this->fetch('content'); ?>

	</div>
   
    <!-- Footer -->
    <footer>
        <section class="grid wfull">
            <article>
                <h4>Links</h4>
                <ol>
                    <li><a href="index.html" title="Home"><strong>Home</strong> (começamos por aqui)</a></li>
                    <li><a href="modelos.html" title="Modelos"><strong>Modelos</strong> (Acompanhantes e Scorts de luxo)</a></li>
                    <li><a href="blog.html" title="Blog"><strong>Blog</strong> (Últimas Notícias)</a></li>
                    <li><a href="contato.html" title="Contato"><strong>Contato</strong> (Fale Conosco)</a></li>
                    <li><a href="anuncie.html" title="Anúncie"><strong>Anúncie</strong> (crie, edite e divulgue seu perfil facilmente)</a></li>
                    <li><a href="assine.html" title="Assine"><strong>Assine</strong> (tenha acesso ao conteúdo exclusivo)</a></li>
                    <li><a href="mapa.html" title="Mapa do<strong> Site"><strong>Mapa do Site</strong> (Todos os links do site)</a></li>
                </ol>
            </article>

            <article>
                <h4>Notícias</h4>
                <ol>
                    <li><a href="" title="">Post, lorem ipsum dolor</a></li>
                    <li><a href="" title="">Post, lorem ipsum dolor</a></li>
                    <li><a href="" title="">Post, lorem ipsum dolor</a></li>
                    <li><a href="" title="">Post, lorem ipsum dolor</a></li>
                    <li><a href="" title="">Post, lorem ipsum dolor</a></li>
                    <li><a href="" title="">Post, lorem ipsum dolor</a></li>
                </ol>
            </article>

            <article>
                <h4>Redes sociais</h4>
            </article>

            <article>
                <h4>Fale Conosco</h4>

                <form action="">
                    <fieldset>
                        <legend></legend>
                        <p><input required type="text" placeholder="Nome"></label></p>
                        <p><input required type="email" placeholder="Email"></label></p>
                        <p><textarea name="" id="" cols="20" rows="3" placeholder="Mensagem"></textarea></p>
                        <p><input type="submit" value="Enviar"></p>
                    </fieldset>
                </form>
            </article>
        </section>

        <article class="rights c12">
            © Copyright 2013 - Red Class Acompanhantes. Todos os direitos reservados
        </article>
    </footer>

</div>
<div id="mapbox">
    <a href="#" class="close" title="Fechar Mapa">X</a>
    <div id="map_canvas"></div>
</div>

<!-- Scripts (jQuery IE:1.9.1; Others:2.0) -->
<script id="load_jquery" src="/js/load-jquery.js?v=1.0.0"></script>
<script src="/js/plugins.js?v=2.0.0"></script>
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBSTSWIUHT8M75ZOzYH8772uEs8rxiZKYw&sensor=true">
    </script>
<script src="/js/script.js?v=1.0.0"></script>
<!---->
</body>
</html>
