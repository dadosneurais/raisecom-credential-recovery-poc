import base64

def encrypt_raisecom(password, rand_val=31, rand2_val=4):
    rand_str = f"{rand_val:03}"
    rand2_str = str(rand2_val)
    
    opt = rand_val >> rand2_val
    
    encoded_chars = [str(ord(char) ^ opt) for char in password]
    string_para_b64 = ",".join(encoded_chars)
    
    b64_bytes = base64.b64encode(string_para_b64.encode('utf-8'))
    b64_string = b64_bytes.decode('utf-8')
    
    return b64_string + rand_str + rand2_str


with open("passwords.txt","r") as r:
    with open("crypt.txt","w") as c:
        for line in r:
            password = str(line.strip())
            result = encrypt_raisecom(password)
            c.write(result+"\n")

