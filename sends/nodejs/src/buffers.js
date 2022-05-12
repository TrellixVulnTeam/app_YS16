//A buffer is an area of memory.

const buffers = () => {
  const buf = Buffer.from('Hey!')
  console.log(buf[0])
  console.log(buf[1])
  console.log(buf[2])

  //print the full content of the buffer using the toString()
  console.log(buf.toString())
  console.log(buf.length)

  //Iterate over the contents of a buffer
  for (const item of buf) {
    console.log(item) //72 101 121 33
  }

  //Changing the content of a buffer
  buf.write('Heybuf.writ!')

  buf.subarray(0).toString() //Hey!
  const slice = buf.subarray(0, 2)
  console.log(slice.toString())

  //Copying a buffer is using the set().
  const bufcopy = Buffer.alloc(4) //allocate 4 bytes
  bufcopy.set(buf)
}

module.exports = {
  buffers
}



