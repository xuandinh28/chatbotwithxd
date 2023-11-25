import React from 'react';
import restaurant from "../images/restaurant.png"
import Common from '../components/Common';

export default function About() {
  return (
    <Common
      title="Quá trình "
      coloredText="hình thành ⌛"
      bodyText={<>Heo Béo, một ngôi nhà hàng nhỏ, hiện hữu chỉ trong vòng sáu tháng trở lại đây, 
      đã nhanh chóng trở thành điểm đến yêu thích của cộng đồng. Từ việc chọn địa điểm, xây dựng, 
      đến trang trí và thực đơn, mọi yếu tố đều được chăm sóc kỹ lưỡng.
      <br />
      <br />
      Bước chân vào Heo Béo, bạn sẽ ngập tràn trong ánh đèn vàng nhẹ nhàng, tạo nên bầu không khí ấm áp và thân thiện. 
      Các món ăn trên thực đơn đa dạng và hấp dẫn,
      mang lại cho thực khách trải nghiệm ẩm thực độc đáo và thú vị.</>}
      btnText="Liên hệ tại đây 📞"
      btnLink="/contact"
      img={restaurant}
    />
  )
}