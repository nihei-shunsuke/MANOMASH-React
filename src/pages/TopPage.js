import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/TopPage.css';

const TopPage = () => {
    return (
        <div>
            <Header />
            <div class="top-wrapper">
                <div class="top-text">
                    <h1>推しへの愛を共有する＿＿</h1>
                    <h1>プロフィール帳で新しい出会いを。</h1>
                </div>
            </div>
            <div class="main-wrapper">
                <h1 class="about-profile">推しプロフィール帳について</h1>
                <div class="main-content right">
                    <h1 class="title-oshi">推しプロフィールをつくろう。</h1>
                    <p>あなたの推しについてのプロフィールをつくろう。<br/>推しへの愛を語り、推しを布教するプロフを作ろう！</p>
                </div>

                <div class="main-content left">
                    <h1 class="title-oshi">新しい出会いを見つけよう。</h1>
                    <p>他の人が作った推しプロフィールをみることができます。<br/>きっと素敵な推しが見つかるはずです。</p>
                </div>

                <div class="main-content right">
                    <h1 class="">懐かしいプロフ帳を楽しもう。</h1>
                    <p>昔懐かしいプロフ帳、今はあまり使われていないですが、<br/>この推しプロフィール帳を使って、Web上で簡単に<br/>そして、さまざまな人と楽しもう。</p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default TopPage;
