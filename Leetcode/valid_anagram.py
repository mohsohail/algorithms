s = 'a'
t = 'ab'

def isAnagram(s: str, t: str) -> bool:
        d = {}
        if s == t:
            return True
        for i in s:
            d[i] = 1
        
        for j in t:
            print(j)

            if not j in d:
                print(False)
                return False
            # else:
            #     print(True)
            #     return True

isAnagram(s, t)