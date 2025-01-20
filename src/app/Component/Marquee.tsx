import { motion } from "framer-motion"

export const Marquee = () => {
  const arr =['100xDevs','100xDevs', '100xDevs', '100Devs']
  const repeatText = Array(7).fill(arr).flat();
  return (
    <div className="bg-pink-500 my-10">
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      >
        <div className="p-3  text-4xl flex gap-6 text-black ">
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

