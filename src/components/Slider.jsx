

const Slider = () => {


    const Images = ['Images/Image1.jpg', 'Images/Image2.jpg', 'Images/Image3.jpg', 'Images/Image4.jpg', 'Images/Image5.jpg', 'Images/Image6.jpg', 'Images/Image7.jpg'];

    let index = 0;

    setInterval(() => {
        const ele = document.querySelector('.big-image-slides');
        if (ele) {
            ele.innerHTML = `<img class="slide-images" src='${Images[index]}' alt="">`;
            index++;

            if (index === Images.length - 1) {
                index = 0;
            }
        }

    }, 3000)

    return <>
        <section className="low-text">
            <p className="bold">Welcome Back</p>
            <p className="small">Quality Guarantee</p>
            <div className="big-image-slides">

            </div>
        </section>

    </>
}

export default Slider;