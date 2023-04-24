<?php get_header(); ?>
<main class="main">
	<section class="mv_low">
		<figure class="mv_low_img page_img"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/news/img_mv.jpg" alt="お問い合わせ"></figure>
		<div class="container">
			<div class="mv_container">
				<div class="pnkz animation_load">
					<a href="<?php echo home_url('/'); ?>" class="pnkz_link">TOP</a>
					<div class="pnkz_text">お知らせ</div>
				</div>
				<div class="heading_1">
					<h1 class="animation_load">お知らせ</h1>
				</div>
			</div>
		</div>
	</section>
	<section class="news_archive">
		<div class="container">
			<div class="news_archive_flex">
				<?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                        global $post;
                        // Query post argument
                        
                        if(isset($_GET['y'])) {
                            $year = $_GET['y'];
                            $start_year = 2018;

                            $date_query = [
                                'year' => $year,
                            ];

                            if ($year == $start_year) {
                                $date_query = [
                                    'year' => $year,
                                    'compare' =>  '<='
                                ];
                            }

                            $args = array(
                                'post_type'      => 'news',
                                'posts_per_page' => 8,
                                'paged'          => $paged,
                                'post_status'    => 'publish',
                                // 'orderby'        => 'date',
                                // 'order'          => 'DESC',
                                'date_query' => array(   
                                    $date_query
                                )    
                            );
                        } else {
                            $args = array(
                                'post_type'      => 'news',
                                'posts_per_page' => 8,
                                'paged'          => $paged,
                                'post_status'    => 'publish',
                                // 'orderby'        => 'date',
                                // 'order'          => 'DESC'
                            );
                        }
                        $posts_query = new WP_Query($args);
                        if($posts_query->have_posts()): ?>
				<div class="archive_area">
					<?php
                          
                            foreach($posts_query->posts as $post):$posts_query->the_post(); ?>
                                <?php
                                      $cats = get_the_terms($post->ID,'news_cate');
                                    //   echo "<prev>";
                                    //   print_r($cats);
                                    //   echo "</prev>";
                                      if($cats){
                                          foreach ( $cats as $cat ){
                                            $cat_link = get_term_link($cat->term_id); 
                                            $cat_name = $cat->name;
                                            $cat_id = $cat->term_id;
                                          }
                                      }
                                ?>
					<a href="<?php the_permalink(); ?>" class="archive_line">
						<div class="archive_container">
							<div class="days"><?php the_time('Y.m.d'); ?></div>
							<div class="title">
									<?php
										if (mb_strlen($post->post_title, 'UTF-8') > 40) {
											$content = mb_substr($post->post_title, 0, 40, 'UTF-8');
											echo $content . '…';
										} else {
											echo $post->post_title;
										}
										?>
							</div>
						</div>
					</a>
					<?php endforeach; ?>
					<?php
                        wp_pagenavi(array('query' => $posts_query));
                        wp_reset_postdata();
                    ?>
                    <?php else: echo '<div class="archive_area"><div class="archive_line no_post"><div class="archive_container"><p class="no_post">現在お知らせはありません。</p></div></div>'; ?> 
                    <?php endif; ?>
				</div>
				 <?php echo get_sidebar(); ?>
				
		</div>
	</section>
</main>
<?php get_footer(); ?>