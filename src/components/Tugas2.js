import React from 'react';

import tgs2_1 from '../assets/img/1.png';
import tgs2_2 from '../assets/img/2.png';
import tgs2_3 from '../assets/img/3.png';
import tgs2_4 from '../assets/img/4.png';
import tgs2_5 from '../assets/img/5.png';
import tgs2_6 from '../assets/img/6.png';
import tgs2_7 from '../assets/img/7.png';
import tgs2_8 from '../assets/img/8.png';
import tgs2_9 from '../assets/img/9.png';
import tgs2_10 from '../assets/img/10.png';
import tgs2_11 from '../assets/img/11.png';
import tgs2_12 from '../assets/img/12.png';
import tgs2_13 from '../assets/img/13.png';
import tgs2_14 from '../assets/img/14.png';
import tgs2_15 from '../assets/img/15.png';
import tgs2_16 from '../assets/img/16.png';
import tgs2_17 from '../assets/img/17.png';
import tgs2_18 from '../assets/img/18.png';
import tgs2_19 from '../assets/img/19.png';
import tgs2_20 from '../assets/img/20.png';
import tgs2_21 from '../assets/img/21.png';
import tgs2_22 from '../assets/img/22.png';
import upLogo from '../assets/img/logo.svg';

function Tugas2(){
    return(
        <div>
            <body className="body">
                <a  href="#" className="up-button" draggable="false"><img src={upLogo} draggable="false"/></a>
                <h1>File Management</h1>
                <h3>1.  Explain again in your own words why we need file management.</h3> 
                <p>File management is needed to help us organize various types of data or information we have on our computers. With file management, we can perform various actions such as creating, opening, copying, moving, renaming, deleting, and so on, on these files. In addition, file management also makes it easier for us to organize files and folders to be more easily accessible and organized. Therefore, file management is very important to help us maintain security, efficiency, and productivity in using our computers.</p>
                <br></br>
                <br></br>
                <h3>2. Create a classification table for the differences between FAT and NTFS!</h3>
                <table>
                    <tr>
                        <th>Difference.</th>
                        <th>FAT</th>
                        <th>NTFS</th>
                    </tr>
                    <tr>
                        <td>Speed.</td>
                        <td>Slower.</td>
                        <td>Faster.</td>
                    </tr>
                    <tr>
                        <td>File size.</td>
                        <td>Limited to 4GB.</td>
                        <td>Supports large files up to 16 exabytes.</td>
                    </tr>
                    <tr>
                        <td>Fragmentation.</td>
                        <td>Not efficient on large disks.</td>
                        <td>More efficient on large disks.</td>
                    </tr>
                    <tr>
                        <td>Security.</td>
                        <td>Does not have security features.</td>
                        <td>Equipped with security features such as encryption and access control.</td>
                    </tr>
                    <tr>
                        <td>Structure.</td>
                        <td>Simple.</td>
                        <td>Complex.</td>
                    </tr>
                    <tr>
                        <td>Operating system support.</td>
                        <td>Can be used on older operating systems.</td>
                        <td>Can be used on newer and wider operating systems</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>etc.</td>
                        <td>etc.</td>
                    </tr>
                </table>

                <br></br>
                <br></br>
                <h3>3. Explain again the Tree-structured directory and acyclic-graph directory</h3>
                <p>The first directory structure is the tree structure, which uses a hierarchical model like a tree with a root directory as the parent of all directories and files. Each file in the system has a unique path or address to identify it.</p>
                <p>The second directory structure is an acyclic graph structure. This structure allows for the sharing of files and directories in a directory, so the same file and subdirectory can be in two different directories. This structure is different from the tree structure that limits the sharing between files and directories.</p>

                <h3> 4. Screenshot hasil Praktikum dari Modul Sistem Operasi</h3>
                <p><b>Operations on files & directories</b></p>
                <p>1. Create</p>
                <p>We can create a new directory by typing the command:</p>
                <p>$ mkdir name_directory</p>
                <img src={tgs2_1} className="tugas2-img" alt=''/>
                <img src={tgs2_2} className="tugas2-img" alt=''/>
                <p>For its development, we can create a directory along with its subdirectories simultaneously, to create the directory at once, we need to type the following command:</p>
                <p>$ mkdir -p SO/praktikum1/tugas1</p>
                <img src={tgs2_3} className="tugas2-img" alt=''/>
                <img src={tgs2_4} className="tugas2-img" alt=''/>
                <br></br>
                <p>2. Write</p>
                <p>Let's begin by practicing how to write some content into file1 using the Nano editor. Type in the following command:</p>
                <p>$ nano file1</p>
                <img src={tgs2_5} className="tugas2-img" alt=''/>
                <p>If you use an editor, the editor screen will appear on your screen. Type the content you want, then press ctrl + O to save it, make sure to name the file, and then press ctrl + x.</p>
                <p>You can also directly type the content using the echo command:</p>
                <p>$ echo “text” &gt file_name</p>
                <img src={tgs2_6} className="tugas2-img" alt=''/>
                <br></br>
                <p>3. Read</p>
                <p>We can use the "cat" command to read the contents of a file. For example, if we want to see the content that we have previously entered using the "echo" command:</p>
                <p>$ cat file_name</p>
                <img src={tgs2_22} className="tugas2-img" alt=''/>
                <br></br>
                <p>4. Delete</p>
                <p>To delete a file, the operating system searches for the directory of the file to be deleted. After finding the directory entry, the operating system releases all file space, which can be reused by other files, and deletes the directory entry.</p>
                <p>The command to delete a file is: $ rm file_name</p>
                <p>To delete a directory, make sure the directory is empty, with the following command: $ rmdir directory name</p>
                <img src={tgs2_7} className="tugas2-img" alt=''/>
                <p>Create a dummy folder for us to delete later, upon checking it is found that file2 has been successfully deleted.</p>
                <img src={tgs2_8} className="tugas2-img" alt=''/>
                <p>Then, we proceed to remove the "cobahapus" directory using the rmdir command.</p>
                <br></br>
                <p>5. Reposition</p>
                <p>Repositioning a file means that in a directory, we search for the corresponding entry and set the current position of the file to a specific value. To search for a file or directory, we can use the "find" command. We can search for files based on their name, type, or time.</p>
                <p>$ find . -name “text”</p>
                <img src={tgs2_9} className="tugas2-img" alt=''/>
                <p>Next, we can also perform a search based on features by typing the "locate" command.</p>
                <p>$ locate keyword </p>
                <img src={tgs2_10} className="tugas2-img" alt=''/>
                <br></br>
                <p>5. Truncate</p>
                <p>Truncate operation allows all attributes to remain unchanged (except for the file size) but resets the file size to zero while keeping the file available. This enables us to set the exact size of the file as desired, delete some contents without having to open the file. We can perform the truncate operation using the following command:</p>
                <p>$ truncate -s "requested size" file_name</p>
                <img src={tgs2_11} className="tugas2-img" alt=''/>
                <p>In the following example, we want to change the size of file1 to 0</p>
                <br></br>
                <p><b>File and Directory Manipulation</b></p>
                <p>1. Viewing directory list.</p>
                <p>We can perform various manipulation activities in a directory, such as moving from one directory to another. Before moving, we need to check which directory we are currently in by using the command "$ pwd".</p>
                <img src={tgs2_12} className="tugas2-img" alt=''/>
                <img src={tgs2_13} className="tugas2-img" alt=''/>
                <br></br>
                <p>2. Copying and Moving Files/Directories</p>
                <p>We may need to make a duplicate of a file in a directory or move a file from one directory to another under certain conditions. To copy files and directories, we can use the following command:
                    $ cp file_name destination_directory</p>
                <img src={tgs2_14} className="tugas2-img" alt=''/>
                <p>The command to move files and directories is:
                    $ mv file_name destination_directory</p>
                <img src={tgs2_15} className="tugas2-img" alt=''/>
                <br></br>
                <p>3. Recursion on directory files</p>
                <p>In the previous discussion of delete, we saw how to delete empty directories. now we will discuss how to delete a directory that still has files in it. Removing directories that still have files in them must be recursive</p>
                <p>To perform recursive deletion of files, directories and subdirectories using command: $ rm -r directory (some cases need root access)</p>
                <br></br>
                <p><b>Access Rights</b></p>
                <img src={tgs2_16} className="tugas2-img" alt=''/>
                <img src={tgs2_17} className="tugas2-img" alt=''/>
                <img src={tgs2_18} className="tugas2-img" alt=''/>
                <img src={tgs2_19} className="tugas2-img" alt=''/>
                <img src={tgs2_20} className="tugas2-img" alt=''/>
                <img src={tgs2_21} className="tugas2-img" alt=''/>

            </body>
        </div>
    )
}

export default Tugas2;