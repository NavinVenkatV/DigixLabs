import { motion } from "framer-motion"

export const Marquee = () => {
  const arr =['100xDevs','100xDevs', '100xDevs', '100Devs']
  const repeatText = Array(7).fill(arr).flat();
  return (
    <div className="bg-pink-500 my-10">
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <div className="p-2 md:p-3 text-xl  md:text-3xl flex gap-6 text-black ">
          {repeatText.map((c, key)=>(
            <div key={key}>
              {c}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

