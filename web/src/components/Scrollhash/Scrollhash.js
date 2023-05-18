import { useMemo, useEffect } from 'react'

import { useLocation } from '@redwoodjs/router'

const Scrollhash = () => {
  let location = useLocation()

  let hashElement = useMemo(() => {
    let hash = location.hash
    console.log('locations', hash)

    const removeHashCharacter = (str) => {
      const result = str.slice(1)
      return result
    }

    if (hash) {
      let element = document.getElementById(removeHashCharacter(hash))
      console.log('if return', element)
      return element
    } else {
      return null
    }
  }, [location])

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: 'smooth',
        // block: "end",
        inline: 'nearest',
      })
    }
  }, [hashElement])

  return null
}

export default Scrollhash

// const Scrollhash = () => {
//   let location = useLocation()

//   let hashElement = useMemo(() => {
//     let hash = location.hash
//     console.log('locations', hash)

//     const removeHashCharacter = (str) => {
//       const result = str.slice(1)
//       return result
//     }

//     if (hash) {
//       let element = document.getElementById(removeHashCharacter(hash))
//       return element
//     } else {
//       return null
//     }
//   }, [location])

//   useEffect(() => {
//     if (hashElement) {
//       hashElement.scrollIntoView({
//         behavior: 'smooth',
//         // block: "end",
//         inline: 'nearest',
//       })
//     }
//   }, [hashElement])

//   return null
// }

// export default Scrollhash

// const ref = useRef(null)
// const workshopScroll = useRef()

// console.log('ref1', { children })
//

// // third try
// useEffect(() => {
//   // call api or anything
//   // const beforeLoad = document.querySelectorAll(
//   //   '.photography-section-grid img'
//   // )

//   // console.log('loaded', beforeLoad[1])
//   onLoad()
// }, [])

// const onLoad = () => {
//   const url = window.location.href
//   // const workshops = document.getElementById('workshops')
//   const footer = document.getElementById('footer')
//   // console.log('should be scrolling')

//   if (url.includes('#workshop')) {
//     console.log('workshops', footer)
//     footer.scrollIntoView({
//       behavior: 'smooth',
//       block: 'end',
//       inline: 'nearest',
//     })
//   }
// }

// firt try
// const ExecuteScroll = () => {
//   // scroller.current.scrollIntoView()
//   useEffect(() => {
//     scroller.current?.scrollIntoView()
//     console.log(window.location.href, scroller)
//   }, [])
// }
// ExecuteScroll()

// second try
// const executeScroll = () => {
//   console.log(scroller.current)
//   scroller.current?.scrollIntoView({ behavior: 'smooth' })
// }

// useEffect(() => {
//   const el = scroller
//   console.log(el.current)
//   if (el) {
//     // el.scrollIntoView()
//     scroller.current.scrollIntoView()
//   }
// }, [scroller])

// console.log('parent', scroller.current)

// useEffect(() => {
//   rollto()
// }, [])

// rollto 2

// const rollto = () => {}

// rollto 1
// const rollto = () => {
//   console.log('rerender')
//   const workshops = document.querySelector('#workshops')
//   const url = window.location.href
//   // const scroll = scroller.current.href
//   const hash = url.split('/')[3]

//   console.log('window', hash)

//   // if (scroll == url) {
//   //   console.log('if statement', scroller.current)
//   //   // scroller.current?.scrollIntoView({ block: 'start', inline: 'nearest' })
//   // }
// }
