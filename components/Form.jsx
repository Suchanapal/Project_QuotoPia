import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full mt-8 max-w-full flex justify-center items-center  flex-col bg'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient grad'>{type} Post</span>
      </h1>
      <p className='desc text-center max-w-md  '>
        {type} and share captivating quotes on Quotopia. Unleash your creativity and inspire the world with your words. 
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism big'
      >
        <label>
          <span className=' font-semibold text-base text-gray-700 txth'>
            Your Amazing Quote
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea txth'
          />
        </label>

        <label>
          <span className=' font-semibold text-base text-gray-700 txth'>
            Field of Quote{" "}
            <span className='font-normal'>
              (#life #love #education #motivation etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input txth'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm button rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
