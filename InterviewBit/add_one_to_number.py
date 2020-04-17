arr = [1,2,3]

def add_to_sum(arr):
    if(arr[0] == 0 and len(set(arr)) == 1):
        return [1]
    else:
        index = 0
        while(arr[index] == 0):
            del arr[index]
        s = ''
        for i in arr:
            s += str(i)

        num = str(int(s) + 1)
        del arr[:]
        for i in num:
            arr.append(int(i))
        print(arr)
        return arr

add_to_sum(arr)