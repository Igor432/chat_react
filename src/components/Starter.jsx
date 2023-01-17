import style from '../components/chatRoom.module.css';
import image1 from './img/charlesdeluvio.jpg'
import image2 from './img/timi-david.jpg'
import image3 from './img/manny-becerra.jpg'

const StarterPage = () => {

return (

<div className={style.starter_page}>
<ul className={style.img_ul}>
<li className={style.img_li}><img src={image1} className={style.img} alt="" /><h4 >Easy to install</h4></li>
<li className={style.img_li}><img src={image2} className={style.img} alt="" /><h4>Absolutely free service</h4></li>
<li className={style.img_li}><img src={image3} className={style.img} alt="" /><h4>Text anyone from anywhere</h4></li>

</ul>



</div>

)


}

export default StarterPage