import jagerOriginal 	 from '../media/products/sss2.png';
import jagerManifest 	 from '../media/products/prod_ssec_img.png';
import jagerColdBrew 	 from '../media/products/jager_cold_brew.webp';
import jagerCoolPack 	 from '../media/products/jager_coolpackphs.png';
import jagerSpice 	 	 from '../media/products/jager_spice.webp';
import miniMeister   	 from '../media/products/mini-meister.webp';
import jagerColdBrewMini from '../media/products/jagermeister-cold-brew-mini.webp';


const shopProducts = [
					{
						id: 1,
						name: 'Jagermeister original',
						price: 32,
						img: jagerOriginal,
						imgId: 'rsz_img_cart_org',
                        quantity:1,
                        className: 'shpprodbox_img'
					},
                    {
						id: 2,
						name: 'Jagermeister manifest',
						price: 15,
						img: jagerManifest,
						imgId: 'rsz_img_cart_manf',
                        quantity:1,
                        className: 'shpprodbox_img'
					},
                    {
						id: 3,
						name: 'Jagermeister Cold Brew',
						price: 20,
						img: jagerColdBrew,
						imgId: 'rsz_img_cart_cbrw',
                        quantity:1,
                        className: 'shpprodbox_img sprodimg_coldbrew'
					},					
                    {
						id: 4,
						name: 'Jagermeister Coolpack',
						price: 25,
						img: jagerCoolPack,
						imgId: 'rsz_img_cart_cpack',
                        quantity:1,
                        className: 'shpprodbox_img'
					},					
                    {
						id: 5,
						name: 'Jagermeister spice',
						price: 33,
						img: jagerSpice,
                        quantity:1,
                        className: 'shpprodbox_img sprodimg_spice'
					},					
                    {
						id: 6,
						name: 'Jagermeister minipack',
						price: 17,
						img: miniMeister,
						imgId: 'rsz_img_cart_minpack',
                        quantity:1,
                        className: 'shpprodbox_img'
					},					
                    {
						id: 7,
						name: 'Jagermeister minibrew',
						price: 27,
						img: jagerColdBrewMini,
                        quantity:1,
                        className: 'shpprodbox_img'
					},

]

export default shopProducts;