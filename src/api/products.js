const PRODUCTS = [
  { 'id': 1, 'title': 'Gameboy', 'price': 9.99, 'src': 'gameboy.jpg', 'description': 'Nintendo handheld video game console released in 1989.' },
  { 'id': 2, 'title': 'Camera Recorder', 'price': 15.00, 'src': 'camera-rec.jpg', 'description': 'Portable electronic recording device capable of recording live-motion video and audio for later playback.' },
  { 'id': 3, 'title': 'NES Controller', 'price': 2.99, 'src': 'nes-controler.jpg', 'description': 'The Nintendo Entertainment System controller is an oblong brick-like design with a simple four button layout.' },
  { 'id': 4, 'title': 'Radio', 'price': 6.29, 'src': 'radio.jpg', 'description': 'Electronic device that receives radio waves and converts the information carried by them to a usable form.' },
  { 'id': 5, 'title': 'White Keyboard', 'price': 2.00, 'src': 'keyboard.jpg', 'description': 'Input device used to enter characters and functions into the computer system by pressing buttons, or keys. It is the primary device used to enter text.' },
  { 'id': 6, 'title': 'Camera Stand', 'price': 5.99, 'src': 'camera-stand.jpg', 'description': 'Tripod used to stabilize and elevate a camera, a flash unit, or other photographic equipment.' },
  { 'id': 7, 'title': 'Old phone', 'price': 8.00, 'src': 'phone.jpg', 'description': 'Old system used to send speech or data over distances' },
  { 'id': 8, 'title': 'Mouse', 'price': 1.00, 'src': 'mouse.jpg', 'description': 'Small handheld input device that controls a computer screen\'s cursor or pointer in conjunction with the way it is moved on a flat surface.' },
  { 'id': 9, 'title': 'Camera', 'price': 19.99, 'src': 'camera.jpg', 'description': 'Optical instrument to capture still images, which are stored in a photographic film.' },
  { 'id': 10, 'title': 'Telephone', 'price': 19.99, 'src': 'telephone.jpg', 'description': 'Device that uses radio waves over a networked area (cells) and is served through a cell site or base station at a fixed location, enabling calls to transmit wirelessly over a wide range, to a fixed landline or via the Internet.' },
  { 'id': 11, 'title': 'Plasma TV', 'price': 19.99, 'src': 'plasma-tv.jpg', 'description': 'Type of flat panel display that uses small cells containing plasma; ionized gas that responds to electric fields.' },
  { 'id': 12, 'title': 'Video Camera', 'price': 19.99, 'src': 'camera-rec.jpg', 'description': 'Camera used for electronic motion picture acquisition (as opposed to a movie camera, which records images on film).' }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(PRODUCTS), 1000)
  }
}
