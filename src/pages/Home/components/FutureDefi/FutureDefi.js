import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import WishlistModal from '../Wishlist/WishlistModal/WishlistModal';
import styles from './FutureDefi.module.scss';


const FutureDefi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
 return (
  <div className={styles.FutureDefi}>
    <div className={styles.FutureDefi__container}>
      <div>
      <span className={styles.FutureDefi__container__span}>
      The Future of DeFi {" "}
      </span>
     {/* <span className={styles.FutureDefi__container__qex}>4.0</span> */}
      </div>
    </div>
    <div>
      <Button type='primary' onClick={showModal} className={styles.FutureDefi__whitelist}>WHITELIST</Button>
    </div>
    <Modal destroyOnClose className={styles.FutureDefi__modal} closable={false} footer={null}  centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <WishlistModal handleCancel={handleCancel}/>
      </Modal>
  </div>
)};

FutureDefi.propTypes = {};

FutureDefi.defaultProps = {};

export default FutureDefi;
