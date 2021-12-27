const Content = () => {
    let handleNameChange = () => {
        let names = ["Bob", "Kevin", "Aaron"]
        let int = Math.floor(Math.random() *3)
        return names[int]
      }
      
    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content
